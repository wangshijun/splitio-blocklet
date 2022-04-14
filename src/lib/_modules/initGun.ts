import Gun from 'gun';
import 'gun/sea.js';

import 'gun/lib/radix.js';
import 'gun/lib/radisk.js';
import 'gun/lib/store.js';
import 'gun/lib/rindexed.js';

export const initAppDB = () => {
	const GUN = Gun({
		peers: [window.blocklet.GUNDB_PEERS.split(',').map((x: string) => x.trim())],
		localStorage: false
	});
	return GUN.get('splitio');
};

export const getSEA = () => {
	return Gun.SEA;
};
