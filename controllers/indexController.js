const getIndex = (req, res) => {
  res.json({ message: 'API server is running' });
};

const getHealth = (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
};

export { getIndex, getHealth };
