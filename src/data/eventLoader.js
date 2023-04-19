export default (() => {
	const localStorageKeyName = "events";
	const getItems = () => {
		return JSON.parse(localStorage.getItem(localStorageKeyName) ?? {});
	};
	const storeItems = (events) => {
		localStorage.setItem(localStorageKeyName, JSON.stringify(events));
	};
	const init = () => {
		storeItems(mockData);
	};

	return {
		getItems,
		storeItems,
		init,
	};
})();

const mockData = [
	{
		title: "weekend 18-19 Marzo",
		image: "logo192.png",
		stato: "PASSATO",
		datestart: "18-03-2023",
		dateend: "19-03-2023",
		id: 1,
	},
	{
		title: "weekend 22-23 Aprile",
		image: "logo192.png",
		stato: "",
		datestart: "22-04-2023",
		dateend: "23-04-2023",
		id: 2,
	},
	{
		title: "weekend 27-28 Maggio",
		image: "logo192.png",
		stato: "",
		datestart: "27-05-2023",
		dateend: "28-05-2023",
		id: 2,
	},
];
