const fs = require('fs');
const path = require('path');
const jsonModel = require ('../models/jsonModel');
const productModel = jsonModel('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
	const visited = productModel.filterBySomething (product => {
		return product.category == 'visited'
	})

	const inSale = productModel.filterBySomething (product => {
		return product.category == 'inSale'
	})

	return res.render ('index', {visited, inSale});

	},
	search: (req, res) => {
		const busqueda = req.query.keywords;

		const product = productModel.filterBySomething (product => {
			return product.name == busqueda;
		})
		return res.render ('results', {products, miBusqueda});
	}
	
};

module.exports = controller;
