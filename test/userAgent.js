// const getAgentInfo = (agent, param) => {
// 	const list = agent.split(',')
// 	return +(list.filter(item => item.indexOf(param) > -1)
// 		.map(item => item.split('='))
// 		.map(item => item[1])[0] || 0)
// }

// const getVersion = () => getAgentInfo('xiaoandroidwebview', 'version') || 0

// // const userAgent = navigator.userAgent.toLowerCase()
// const userAgent = 'xiaoandroidwebview'

// const isAndroidApp = /xiaoandroidwebview/.test(userAgent)

// const isIosApp = /xiaoioswebview/.test(userAgent)

// const isApp = isAndroidApp || isIosApp

// const version = isApp && getAgentInfo(userAgent, 'version') || 0

// const kfOff = isAndroidApp && version < 9

// module.exports = getAgentInfo