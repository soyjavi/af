import Storage from 'vanilla-storage';
import { C, render } from '../common';

const { STORE } = C;

export default ({ session }, res) => {
  const logs = new Storage(STORE.BOTS);
  let logItems = '';

  logs.get('traderbot').value
    .reverse()
    .slice(0, 32)
    .forEach((log) => {
      logItems += render('admin-traderbot-tableItem', log);
    });

  res.send(render('index', {
    role: 'admin',
    script: '<script src="/admin.js" defer></script>',
    main: render('admin-traderbot', {
      name: session.name.split(' ')[0],
      logs: logItems,
    }),
  }));
};
