import { getChartData } from '@/services/spot-prices';
onmessage = function (e) {
  const metal = e.data;

  const fetchChartData = async () => {
    const response = await getChartData(1, 'week', true);
    postMessage(response.data);
  };

  fetchChartData();
};
