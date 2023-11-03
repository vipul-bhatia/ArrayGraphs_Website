'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl pt-9 pb-9 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>FAQ</h2>
            <div className="w-full px-4 pt-10">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Can 3D models be designed by Arraygraphs?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className={`px-4 pt-4 pb-2 relative text-base text-black font-normal opacity-50 ${open ? 'h-auto' : 'h-0'}`}>
                                    Yes, Arraygraphs specializes in 3D modeling and design, offering creative and detailed solutions<br/> for various industries and applications.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Can Arraygraphs design websites and make them operational?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className={`px-4 pt-4 pb-2 relative text-base text-black font-normal opacity-50 ${open ? 'h-auto' : 'h-0'}`}>
                                    Yes, ArrayGraphs can design and create operational websites.<br/>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Can Arraygraphs restore damaged photographs?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className={`px-4 pt-4 pb-2 relative text-base text-black font-normal opacity-50 ${open ? 'h-auto' : 'h-0'}`}>
                                    While our primary expertise lies in graphic design and 3D modeling,<br/> We also offer photo restoration services as part of our design portfolio.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;
