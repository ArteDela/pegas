pegas.cart =
{
	summ:0,
	totalSumm: 0,
	calculateSumm(element)
	{
		let count = $(element).parents('.cart__table-body').find('._count').text();
		let price = $(element).parents('.cart__table-body').find('._price').text();
		let summ = $(element).parents('.cart__table-body').find('._summ');
		let summArray = Array.prototype.slice.call($('._summ'));
		pegas.cart.summ = count * +price.replace(/\D/g,'');
		summ.text(pegas.maskValue(pegas.cart.summ));
		pegas.cart.totalSumm = summArray.reduce((a,b)=>(+$(a).text().replace(/\D/g,'') + +$(b).text().replace(/\D/g,'')));
		$('._total-price').text(pegas.maskValue(pegas.cart.totalSumm));
	}
};