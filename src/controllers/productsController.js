const fs = require('fs');
const path = require('path');
const jsonModel = require ('../models/jsonModel');
const productModel = jsonModel ('products')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const controller = {
	// Root - Show all products
	root: (req, res) => {

		res.render ('products')
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const product = productModel.findById(req.params.productId);

		return res.render('detail', {product})
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {

		const product = productModel.findById(req.params.productId)

		return res.render ('product-edit-form', {productId})
	},
	// Update - Method to update
	update: (req, res) => {
		productModel.edit (req.body, req.params.productId)


		return res.redirect ('products/detail/' + req.params.productId)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let products = customFunctions.leoJson (productsFilePath);

		products.forEach ((elem, index) => {
			if (elem.id == req.params.productId) {
				products.splice (index, 1)
			}
		});
		customFunctions.escriboJson (products, productsFilePath);

		return res.redirect ('/')
	}
};

module.exports = controller;