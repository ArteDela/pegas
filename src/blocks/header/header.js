pegas.header =
{
	showInfo(instance)
	{
		let parent = instance.closest('._header__item');
		parent.classList.contains('open') ? parent.classList.remove('open') : parent.classList.add('open');
		let listner = pegas.clickOutside(parent, () =>
		{
			parent.classList.remove('open');
		});
	},
	showMpbMenu(instance)
	{
		$(instance).toggleClass('active');
		$('.header__mobile-menu').toggleClass('active');
	},
	showDopItems(instance)
	{
		$(instance).parents('.header__mobile-menu-list').find('.header__mobile-shower').slideToggle(200);
	}
};