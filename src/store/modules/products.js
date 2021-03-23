export default {
  state: {
    products: [
      {
        id: 1,
        name: 'Жемчук',
        price: 46690,
        discount: 29,
        category: 'Женские',
        img: '1.png',
        size: [
          {
            id: 1,
            num: 37
          },
          {
            id: 2,
            num: 40
          },
          {
            id: 3,
            num: 41
          },
          {
            id: 4,
            num: 44
          }
        ],
        active: false
      },
      {
        id: 2,
        name: 'Караловый',
        price: 46690,
        discount: false,
        category: 'Женские',
        img: '2.png',
        size: [
          {
            id: 1,
            num: 40
          },
          {
            id: 2,
            num: 41
          },
          {
            id: 3,
            num: 42
          }
        ],
        active: false
      },
      {
        id: 3,
        name: 'Темный',
        price: 87890,
        discount: 10,
        category: 'Женские',
        img: '3.png',
        size: [
          {
            id: 1,
            num: 38
          },
          {
            id: 2,
            num: 39
          },
          {
            id: 3,
            num: 40
          }
        ],
        active: false
      },
      {
        id: 4,
        name: 'Вентос',
        price: 46690,
        discount: false,
        category: 'Мужские',
        img: '4.png',
        size: [
          {
            id: 1,
            num: 37
          },
          {
            id: 2,
            num: 40
          },
          {
            id: 3,
            num: 41
          },
          {
            id: 4,
            num: 44
          }
        ],
        active: false
      },
      {
        id: 5,
        name: 'Босоножка',
        price: 27490,
        discount: 20,
        category: 'Женские',
        img: '5.png',
        size: [
          {
            id: 1,
            num: 37
          },
          {
            id: 2,
            num: 40
          },
          {
            id: 3,
            num: 41
          },
          {
            id: 4,
            num: 44
          }
        ],
        active: false
      },
      {
        id: 6,
        name: 'Горный',
        price: 54990,
        discount: false,
        category: 'Мужские',
        img: '6.png',
        size: [
          {
            id: 1,
            num: 37
          },
          {
            id: 2,
            num: 40
          },
          {
            id: 3,
            num: 41
          },
          {
            id: 4,
            num: 44
          }
        ],
        active: false
      },
      {
        id: 7,
        name: 'Берцый',
        price: 43990,
        discount: 50,
        category: 'Мужские',
        img: '7.png',
        size: [
          {
            id: 1,
            num: 37
          },
          {
            id: 2,
            num: 40
          },
          {
            id: 3,
            num: 41
          },
          {
            id: 4,
            num: 44
          }
        ],
        active: false
      },
      {
        id: 8,
        name: 'Макасины',
        price: 52190,
        discount: false,
        category: 'Мужские',
        img: '8.png',
        size: [
          {
            id: 1,
            num: 37
          },
          {
            id: 2,
            num: 40
          },
          {
            id: 3,
            num: 41
          },
          {
            id: 4,
            num: 44
          }
        ],
        active: false
      },
      {
        id: 9,
        name: 'Пафос',
        price: 32990,
        discount: 5,
        category: 'Женские',
        img: '9.png',
        size: [
          {
            id: 1,
            num: 37
          },
          {
            id: 2,
            num: 40
          },
          {
            id: 3,
            num: 41
          },
          {
            id: 4,
            num: 44
          }
        ],
        active: false
      }
    ]
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    }
  },
  actions: {
  },
  mutations: {
  },
}