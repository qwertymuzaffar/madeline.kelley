/**
 * Enhanced interactions and animations
 */

(function() {
	'use strict';

	// Sticky header on scroll
	function initStickyHeader() {
		var header = document.getElementById('header');
		if (!header) return;

		window.addEventListener('scroll', function() {
			if (window.scrollY > 100) {
				header.classList.add('scrolled');
			} else {
				header.classList.remove('scrolled');
			}
		});
	}

	// Smooth scroll for anchor links
	function initSmoothScroll() {
		document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
			anchor.addEventListener('click', function(e) {
				var href = this.getAttribute('href');
				if (href === '#' || href === '#menu') return;

				var target = document.querySelector(href);
				if (target) {
					e.preventDefault();
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}
			});
		});
	}

	// Fade in elements on scroll (intersection observer)
	function initScrollAnimations() {
		if (!('IntersectionObserver' in window)) return;

		var observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};

		var observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.style.opacity = '1';
					entry.target.style.transform = 'translateY(0)';
				}
			});
		}, observerOptions);

		// Observe all sections
		document.querySelectorAll('section').forEach(function(section) {
			observer.observe(section);
		});
	}

	// Add loading class removal
	function initPageLoad() {
		window.addEventListener('load', function() {
			document.body.classList.remove('is-loading');
		});
	}

	// Parallax effect for banner (subtle)
	function initParallax() {
		var banner = document.getElementById('banner');
		if (!banner) return;

		window.addEventListener('scroll', function() {
			var scrolled = window.scrollY;
			var rate = scrolled * 0.5;
			banner.style.backgroundPositionY = rate + 'px';
		});
	}

	// Image lazy loading enhancement
	function initImageOptimization() {
		if ('loading' in HTMLImageElement.prototype) {
			// Browser supports native lazy loading
			document.querySelectorAll('img').forEach(function(img) {
				img.loading = 'lazy';
			});
		}
	}

	// Initialize all enhancements when DOM is ready
	function init() {
		initPageLoad();
		initStickyHeader();
		initSmoothScroll();
		initScrollAnimations();
		initParallax();
		initImageOptimization();
	}

	// Run when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

})();
