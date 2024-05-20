import {RadioGroup} from '@headlessui/react';
import {useNavigate} from '@remix-run/react';
import {VariantSelector} from '@shopify/hydrogen';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductForm({product, selectedVariant, variants}) {
  const navigate = useNavigate();

  return (
    <form className="mt-10">
      <VariantSelector
        options={product.options}
        variants={variants}
        handle={product.handle}
      >
        {({option}) => (
          <>
            <h3 className="text-sm font-medium text-gray-900 mt-10">
              {option.name}
            </h3>
            <RadioGroup
              value={selectedVariant.title}
              className="mt-4"
              onChange={(selectedOption) => {
                const optionValue = option.values.find(
                  (v) => v.value === selectedOption,
                );
                navigate(optionValue.to, {
                  preventScrollReset: true,
                });
              }}
            >
              <RadioGroup.Label className="sr-only">
                Choose a {option.name}
              </RadioGroup.Label>
              <div className="flex items-center space-x-3">
                {option.values.map(
                  ({value, isAvailable, to, path, isActive}) => (
                    <RadioGroup.Option
                      key={value}
                      value={value}
                      disabled={!isAvailable}
                      className={({active}) =>
                        classNames(
                          isAvailable
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          isActive ? 'ring-2 ring-indigo-500' : '',
                          'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                        )
                      }
                    >
                      {({active, checked}) => (
                        <>
                          <RadioGroup.Label as="span">{value}</RadioGroup.Label>
                          {isAvailable ? (
                            <span
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked
                                  ? 'border-indigo-500'
                                  : 'border-transparent',
                                'pointer-events-none absolute -inset-px rounded-md',
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1={0}
                                  y1={100}
                                  x2={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                  ),
                )}
              </div>
            </RadioGroup>
          </>
        )}
      </VariantSelector>
      <button
        type="submit"
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add to bag
      </button>
    </form>
  );
}
