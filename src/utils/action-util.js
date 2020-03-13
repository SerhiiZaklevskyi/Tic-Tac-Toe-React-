const fireAction = ({ actionName, itemName }) => {
  const getItem = key => JSON.parse(localStorage.getItem(key));
  const entity = getItem(itemName);
  entity !== null && actionName(entity);
};

export default fireAction;
