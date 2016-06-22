exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
		var time;
		
		function startCount() {
			console.log(start++);
			if(start <= end) {
				time = setTimeout(startCount, 100);
			}
		};

		startCount();

		return {
			cancel: function() {
				clearTimeout(time);
			}
		};
    }

};
