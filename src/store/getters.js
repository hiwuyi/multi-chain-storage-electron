const getters = {
  sidebar: state => state.app.sidebar,
  enable: state => state.user.enable,
  userId: state => state.user.userId,
  accessToken: state => state.user.accessToken,
  name: state => state.user.name,
  showName: state => state.user.showName,
  email: state => state.user.email,
  phone: state => state.user.phone,
  checkStatus: state => state.user.checkStatus,
  level: state => state.user.level,
  registerType: state => state.user.registerType,
  source: state => state.user.source,
  permissions: state => state.user.permissions,
  menus: state => state.user.menus,
  languageMcs: state => state.app.languageMcs,
  routerMenu: state => state.app.routerMenu,
  headertitle: state => state.app.headertitle,
  addRouters: state => state.permission.addRouters,
  permission_routers: state => state.permission.routers,
  linkPageName: state => state.user.linkPageName,
  linkTime: state => state.user.linkTime,
  metaInfo: state => state.app.metaInfo,
  avater: state => state.app.avater,
  collapseL: state => state.app.collapseL,
  metaAddress: state => state.app.metaAddress,
  networkID: state => state.app.networkID,
  metaNetworkInfo: state => state.app.metaNetworkInfo,
  reverse: state => state.app.reverse,
  free_usage: state => state.app.free_usage,
  free_quota_per_month: state => state.app.free_quota_per_month,
  free_bucket: state => state.app.free_bucket,
  free_bucketAll: state => state.app.free_bucketAll,
  mcsjwtToken: state => state.app.mcsjwtToken,
  mcsEmail: state => state.app.mcsEmail,
  apikeyAccount: state => state.app.apikeyAccount
}
export default getters
