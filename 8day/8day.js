
new Vue({
	el: '#app',
	data: {
	  num: 1000,
	  count: 0,
	  is_comma: true
	},
	watch: {
	  num (val) {
		this.setCount(val)
	  }
	},
	methods: {
	  addVal (n) {
		this.num += n
	  },
	  doubleVal () {
		this.num *= 2
	  },
	  resetVal () {
		this.num = 0
		this.count = 0
	  },
	  setCount (val) {
		const obj = { n: this.count }
		anime({
		  targets: obj,
		  n: val,
		  round: 1,
		  duration: 500,
		  easing: 'linear',
		  update: () => {
			this.count = obj.n
		  }
		})
	  }
	},
	filters: {
	  addComma (val) {
		return val.toLocaleString()
	  }
	},
	mounted () {
	  this.setCount(this.num);
	}
  })