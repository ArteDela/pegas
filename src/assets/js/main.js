"use strict";
/**
 * инициализация всех инициализаций
 */
$(document).ready(function()
{
	pegas.init();
});

/**
 * основной объект
 */
const pegas =
{
	/**
	 * вызов функций, которые должны запускаться при загрузке страницы
	 */
	init()
	{
		this.reviews.initSlider();
		this.partners.initSlider();
		this.address.init();
		this.innputMask();
	},
	/**
	* отслеживание клика вне блока
	*/
	clickOutside(element, callback)
	{
		const outsideChecker = (event) =>
		{
			const container = $(element);

			if (!container.is(event.target) && container.has(event.target).length === 0)
			{
				document.removeEventListener('click', outsideChecker);
				callback();
			}
		};

		document.addEventListener('click', outsideChecker);

		return outsideChecker;
	},
	innputMask()
	{
		$('._phone-mask').mask('+7(999)999-99-99',{autoclear: false});
	}
};