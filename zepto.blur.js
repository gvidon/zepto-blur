;(function($) {
	$.extend($.fn, {
		blurba: function(options) {$(window).on('scroll', (function() {
			var
				topToTopOffset = this.offset().top - $('body').scrollTop(),
				bottomToTopOffset = this.offset().top + this.height() - $('body').scrollTop(),
				maxBlur = options.max || 8,

				blur = Math.min(Math.max(
					// Start unblur when top of the node is in smoothness px from edge (edge px from top of display)
					options.edge && maxBlur * ((topToTopOffset - options.edge)/options.smoothness),

					// Start blur when bottom of the node is in smoothness px from bottomEdge (bottomEdge px from top of display)
					options.bottomEdge && maxBlur * (1 - (bottomToTopOffset - options.bottomEdge)/Math.min(options.smoothness, this.height()))
				), maxBlur);

			this.css([
				'-webkit-filter',
				'-moz-filter',
				'-o-filter',
				'-ms-filter',
				'filter'
			].reduce(function(R, D) {
				R[D] = 'blur(' + blur + 'px)';
				return R;
			}, {}));

			return this;
		}).bind(this))}
	})
})(Zepto)