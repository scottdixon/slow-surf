const reviews = {
  'zero-gravity-glider': [
    {
      id: 1,
      name: 'Jane Smith',
      date: 'May 21, 2023',
      content:
        "I'm new to surfing and this board has been a great starter for me. It's stable and easy to maneuver, which has helped me build confidence. The quality is also impressive for the price.",
      starRating: 4,
    },
    {
      id: 2,
      name: 'Sally Johnson',
      date: 'May 23, 2023',
      content:
        "The surfboard is okay. It's good for beginners but if you're an experienced surfer, you might find it a bit basic. It's durable though, and the design is pretty cool.",
      starRating: 3,
    },
  ],
};

export default function getProductReviews(handle) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(reviews[handle]), 2000),
  );
}
