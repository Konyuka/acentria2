<script setup>
import ApexTree from 'apextree'

const data = {
    id: 'ms',
    data: {
        name: 'Acentria Group',
    },
    options: {
        nodeBGColor: '#ed1c24',
        nodeBGColorHover: '#000',
    },
    children: [
        {
            id: 'ib',
            data: {
                name: 'Insurance Brokers',
            },
            options: {
                nodeBGColor: '#000',
                nodeBGColorHover: '#000',
            },
            children: [
                {
                    id: 'aibl',
                    data: {
                        name: 'Acentria Insurance Brokers Limited',
                    },
                    options: {
                        nodeBGColor: '#ed1c24',
                        nodeBGColorHover: '#000',
                    },
                    children:[
                        {
                            id: 'iik1',
                            data: {
                                name: 'Incoporated in Kenya',
                            },
                            options: {
                                nodeBGColor: '#000',
                                nodeBGColorHover: '#ed1c24',
                            },
                        },
                    ]
                },
            ],
        },
        {
            id: 'rb',
            data: {
                name: 'Reinsurance Brokers',
            },
            options: {
                nodeBGColor: '#000',
                nodeBGColorHover: '#000',
            },
            children: [
                {
                    id: 'airbl',
                    data: {
                        name: 'Acentria International Reinsurance Brokers Limited',
                    },
                    options: {
                        nodeBGColor: '#ed1c24',
                        nodeBGColorHover: '#000',
                    },
                    children:[
                        {
                            id: 'inkaiiuat',
                            data: {
                                name: 'Incorporated in Kenya Accredited in UG and TZ',
                            },
                            options: {
                                nodeBGColor: '#000',
                                nodeBGColorHover: '#ed1c24',
                            },
                        },
                    ]
                },
            ],
        },
        {
            id: 'aafs',
            data: {
                name: 'Actuarial and Financial Services',
            },
            options: {
                nodeBGColor: '#000',
                nodeBGColorHover: '#000',
            },
            children: [
                {
                    id: 'aaafsl',
                    data: {
                        name: 'Acentria Actuarial and Financial Services Limited',
                    },
                    options: {
                        nodeBGColor: '#ed1c24',
                        nodeBGColorHover: '#000',
                    },
                    children:[
                        {
                            id: 'iik3',
                            data: {
                                name: 'Incorporated in Kenya',
                            },
                            options: {
                                nodeBGColor: '#000',
                                nodeBGColorHover: '#ed1c24',
                            },
                        },
                    ]
                },
            ],
        },
        {
            id: 'i',
            data: {
                name: 'Investments',
            },
            options: {
                nodeBGColor: '#000',
                nodeBGColorHover: '#000',
            },
            children: [
                {
                    id: 'ail',
                    data: {
                        name: 'Acentria Investments Limited',
                    },
                    options: {
                        nodeBGColor: '#ed1c24',
                        nodeBGColorHover: '#000',
                    },
                    children:[
                        {
                            id: 'ink',
                            data: {
                                name: 'Incoporated in Kenya',
                            },
                            options: {
                                nodeBGColor: '#000',
                                nodeBGColorHover: '#ed1c24',
                            },
                        },
                    ]
                },
            ],
        },
        {
            id: 't',
            data: {
                name: 'Technologies',
            },
            options: {
                nodeBGColor: '#000',
                nodeBGColorHover: '#000',
            },
            children: [
                {
                    id: 'atl',
                    data: {
                        name: 'Acentria Technologies Limited',
                    },
                    options: {
                        nodeBGColor: '#ed1c24',
                        nodeBGColorHover: '#000',
                    },
                    children:[
                        {
                            id: 'ink2',
                            data: {
                                name: 'Incoporated in Kenya',
                            },
                            options: {
                                nodeBGColor: '#000',
                                nodeBGColorHover: '#ed1c24',
                            },
                        },
                    ]
                },
            ],
        },
        
    ],
};
const options = {
    contentKey: 'data',
    width: '95vw',
    height: 600,
    nodeWidth: 400,
    nodeHeight: 100,
    fontColor: '#fff',
    borderColor: '#333',
    childrenSpacing: 50,
    siblingSpacing: 20,
    direction: 'left',
    nodeTemplate: (content) =>
        `<div style='display: flex;flex-direction: column;gap: 10px;justify-content: center;align-items: center;height: 100%;'>
          <div style="font-weight: bold; font-family: Arial; font-size: 14px;" class="!font-sans">${content.name}</div>
         </div>`,
    canvasStyle: 'border: 1px solid black;background: #f6f6f6;',
    enableToolbar: false,
};

// const tree = new ApexTree(document.getElementById('svg-tree'), options);
// tree.render(data);

onMounted(() => {
    // const treeElement = document.getElementById('svg-tree');
    // if (treeElement) {
    //     const tree = new ApexTree(treeElement, options);
    //     tree.render(data);
    // } else {
    //     console.error('Element with id "svg-tree" not found.');
    // }
});

</script>

<template>
    <div class="font-sans bg-white pb-16 pt-10 sm:pb-24 sm:pt-10 xl:pb-10">
        <div class="container bg-white pb-20 sm:pb-24 md:rounded xl:pb-0">
            <div class="pb-7 text-center">
                <h2 class="font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 leading-tight lg:leading-tight">
                    Our Group Structure
                </h2>
            </div>
            <div id="svg-tree" ref="svg-tree" class="!font-sans"></div>
        </div>
    </div>
</template>

<style scoped></style>