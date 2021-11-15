import TradingViewEditor from './src/TradingViewEditor.js'
import tradingViewRenderer from './src/tradingViewRenderer.js'

class TradingView {
	constructor() {
		this.id = 'tradingview.widget'
		this.name = 'Trading View'
		this.editor = TradingViewEditor
		this.renderer = tradingViewRenderer
		this.source = 'node_modules/@bitquery/ide-tradingview/src/tradingViewRenderer.js'
		this.dependencies = [
			'https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js'
		]
	}
	supportsModel(model) {
		for (let key in model) {
			return (model[key].typeInfo.toString()[0]==='[' 
				&& model[key].typeInfo.toString().slice(-2, -1)!=='0') || key === 'data'
		}
	}
}

export let tradingView = new TradingView()
