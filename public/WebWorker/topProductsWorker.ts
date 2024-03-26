// topProductsWorker.ts
import { getTopProducts } from '@/services/spot-prices';
const ctx: Worker = self as any;

ctx.addEventListener('message', async (event) => {
  const { metalType } = event.data;
  const response = await getTopProducts('NearToSpot', '', metalType,'6','1');
  ctx.postMessage(response.homePageProductDetails);
});
