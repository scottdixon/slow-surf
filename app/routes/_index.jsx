export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context}) {
  throw new Response('Not implemented yet :)', {
    status: 501,
  });
}
