const content = {
  'zero-gravity-glider': {
    highlights: ['FCS Fins', 'Squash Tail', 'Intermediate to Advanced'],
    construction: `Made from a durable EPS foam core and layered with a robust epoxy shell, it's built to withstand the toughest waves.`,
  },
};

export default function getProductContent(handle) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(content[handle]), 1000),
  );
}
