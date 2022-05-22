interface Page {
  title: string;
  path: `${number}${number}${number}`;
  description: string;
}
const pages: Page[] = [
  {
    title: 'Spline Logo',
    path: '001',
    description:
      "Trying to learn how to use Spline from spline.design. I based this model on something from their community library and recreated my company's logo "
  }
];

export default pages;
