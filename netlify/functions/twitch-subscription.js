exports.handler = async (event) => {
  const { headers = [] } = event;

  const type = headers['twitch-eventsub-message-type'] || 'no type';

  return {
    statusCode: 200,
    body: JSON.stringify({
      type,
      message: 'ok',
    }),
  };
};
