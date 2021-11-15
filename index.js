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
			return key.split('.')[key.split('.').length-1] === 'dexTrades' &&
			model[key].selectionSet.selections.map(selection =>
				selection.alias &&
				(selection.alias.value === 'open' ||
				selection.alias.value === 'high' ||
				selection.alias.value === 'low' ||
				selection.alias.value === 'close') === true
			).filter(item => item).length === 4
		}
	}
}

export let tradingView = new TradingView()
