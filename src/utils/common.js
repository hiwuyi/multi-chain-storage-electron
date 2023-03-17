import store from '../store'
import axios from 'axios'

import MetaMaskSDK from '@metamask/sdk'

export async function sendRequest (apilink, type, jsonObject, config) {
  // axios.defaults.timeout = 60000
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.mcsjwtToken
  try {
    let response
    switch (type) {
      case 'post':
        response = await axios.post(apilink, jsonObject, config)
        return response.data
      case 'put':
        response = await axios.put(apilink, jsonObject)
        return response.data
      case 'get':
        response = await axios.get(apilink)
        return response.data
      case 'delete':
        response = await axios.delete(apilink, {
          data: jsonObject
        })
        return response.data
    }
  } catch (error) {
    console.log(error)
    if (error.response) {
      // The request has been sent, but the status code of the server response is not within the range of 2xx
      // console.log(error.response.data)
      // console.log(error.response.status)
      // console.log(error.response.headers)
      return error.response.data
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    // console.log(error.config)
  }
}

export async function timeout (delay) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

const Web3 = require('web3')
const sdk = new MetaMaskSDK({
  useDeeplink: false,
  communicationLayerPreference: 'socket'
})

const ethereum = sdk.getProvider()
// console.log('ethereum', ethereum)
// const ethereum = window.ethereum
let web3
if (window.ethereum) {
  web3 = new Web3(ethereum)
  web3.setProvider(ethereum)
} else if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider)
} else {
  // Other provider
  web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com/'))
}
const web3Init = web3

export async function Init (callback) {
  ethereum
    .request({
      method: 'eth_requestAccounts'
    })
    .then((accounts) => {
      console.log(accounts)
      if (!accounts) {
        return false
      }
      web3Init.eth.getAccounts().then(async webAccounts => {
        store.dispatch('setMetaAddress', webAccounts[0])
        const chainId = await ethereum.request({
          method: 'eth_chainId'
        })
        store.dispatch('setMetaNetworkId', parseInt(chainId, 16))
        callback(webAccounts[0])
      })
        .catch(async () => {
          store.dispatch('setMetaAddress', accounts[0])
          const chainId = await ethereum.request({
            method: 'eth_chainId'
          })
          store.dispatch('setMetaNetworkId', parseInt(chainId, 16))
          callback(accounts[0])
        })
    })
    .catch((error) => {
      if (error === 'User rejected provider access') {} else {
        alert('Please unlock MetaMask and switch to the correct network.')
        return false
      }
      console.error(
        `Error fetching accounts: ${error.message}.
        Code: ${error.code}. Data: ${error.data}`
      )
    })
}

export default {
  Init,
  sendRequest,
  timeout,
  web3Init
}
