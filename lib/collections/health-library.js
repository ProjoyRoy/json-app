Schemas = {};

HealthLibrary = new Mongo.Collection('health-library');

Schemas.HealthLibrary = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},
	description: {
		type: String,
		label: "Description"
	},
	source: {
		type: String,
		label: "Source"
	},
	thumbnail: {
		type: String
	},
	locale: {
		type: String,
		label: "Local"
	},
	active: {
		type: String,
		label: "Active"
	},
	visibility: {
		type: String,
		label: "Visibility",
		autoform: {
			firstOption: false,
			options: [
			{
				label: "All",
				value: "all"
			},
			{
				label: "Employees",
				value: "employees"
			},
			{
				label: "User Collection",
				value: "usercol"
			}
			]
		}
	},
	groups: {
		type: String,
		label: "User Collections",
		defaultValue: []
	},
	tags: {
		type: String,
		label: "Tags",
		defaultValue: [],
		minCount: 0
	},
	viewCount: {
		type: Number,
		defaultValue: 0
	}
});

HealthLibrary.attachSchema(Schemas.HealthLibrary);