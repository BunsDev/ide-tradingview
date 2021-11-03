import { createChart } from 'lightweight-charts'

export default async function tradingViewrenderer(ds, config, el) {
	let values = undefined
	if (!ds.values) {
		const data = await ds.fetcher()
		const json = await data.json()
		values = ds.setupData(json)
	} else {
		values = ds.values
	}
	const chart = createChart(el, {
		timeScale: {
			timeVisible: true,
			secondsVisible: false,
		}
	})
	const candlestickSeries = chart.addCandlestickSeries()
	const data = []
	for (let i = 0; i < values.length; i++) {
		let trade = {
			time: Math.round(new Date(values[i]?.timeInterval?.minute).getTime() / 1000),
			open: +values[i].open,
			high: values[i].high,
			low: values[i].low,
			close: +values[i].close
		}
		data.push(trade)
	}
	candlestickSeries.setData(data)
	function reportWindowSize() {
		chart.applyOptions({
			width: document.getElementById(el).clientWidth,
			height: document.getElementById(el).clientHeight
		});
	}
	window.addEventListener('resize', reportWindowSize)
}