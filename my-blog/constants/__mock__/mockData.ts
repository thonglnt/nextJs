import { DEFAULT_HEADER_URL } from '@constants/router'
import { Document } from '@contentful/rich-text-types'

export const LOGO_TITLE = 'BEAUTYONCODE'

export const NAVIGATE_ITEM = [
  {
    id: 1,
    name: DEFAULT_HEADER_URL.HOME.TITLE,
    path: DEFAULT_HEADER_URL.HOME.URL,
  },
  {
    id: 2,
    name: DEFAULT_HEADER_URL.MOST_VIEW.TITLE,
    path: DEFAULT_HEADER_URL.MOST_VIEW.URL,
  },
  {
    id: 3,
    name: DEFAULT_HEADER_URL.BLOG.TITLE,
    path: DEFAULT_HEADER_URL.BLOG.URL,
  },
  {
    id: 4,
    name: DEFAULT_HEADER_URL.ABOUT.TITLE,
    path: DEFAULT_HEADER_URL.ABOUT.URL,
  },
  {
    id: 5,
    name: DEFAULT_HEADER_URL.SHORT_POST.TITLE,
    path: DEFAULT_HEADER_URL.SHORT_POST.URL,
  },
]

export const MOCK_DATA_HOME_PAGE = {
  fields: {
    author: 'Thuan Dang',
    image: [
      {
        url: 'https://url',
      },
    ],
    foreword: {
      content: [],
    },
  },
}

export const MOCK_WIDGET = {
  title: 'Categories',
  widgetsItem: [
    {
      name: 'Python',
      slug: 'python',
    },
    {
      name: 'JavaScript',
      slug: 'javascript',
    },
    {
      name: 'NextJS',
      slug: 'nextjs',
    },
    {
      name: 'Front-End',
      slug: 'front-end',
    },
    {
      name: 'Linux',
      slug: 'linux',
    },
    {
      name: 'CSS',
      slug: 'css',
    },
  ],
}

export const MOCK_DATA_CARD_POST = {
  image:
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  alt: 'CSS',
  headerContent: 'CSS',
  view: '300',
  href: '',
  shortContent: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'Chào mừng bạn đến với blog số 5 của series “Linux dành cho lập trình viên”. Trong các blog trước, mình đã đi qua các nội dung về: – “Giới thiệu về Linux” – “Làm quen câu lệnh và hệ thống tập tin…\n',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
    ],
    nodeType: 'document',
  } as unknown as Document,
}

export const MOCK_NAVIGATE = {
  navItems: [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Most View',
      path: '/most-view/1',
    },
    {
      id: 3,
      name: 'Blog',
      path: '/blog/1',
    },
    {
      id: 4,
      name: 'About',
      path: '/about',
    },
  ],
}

export const MOCK_CATEGORY_ITEMS = [
  {
    name: 'All',
    slug: 'blog',
  },
  {
    name: 'Programming',
    slug: 'category/programming/1',
  },
  {
    name: 'Short Posts',
    slug: 'category/short-posts/1',
  },
  {
    name: 'Most Views',
    slug: 'category/most-views/1',
  },
]

export const MOCK_DATA_PAGE = [
  {
    fields: {
      title: 'Các bài viết ngắn – phần 1',
      slug: 'cac-bai-viet-ngan-phan-1',
      heroImage: [
        {
          url: 'http://res.cloudinary.com/dmxoarerm/image/upload/f_auto/q_auto:best/v1669609433/food-2203732_1280_gm3dx8.webp',
          tags: [],
          type: 'upload',
          bytes: 270722,
          width: 1280,
          format: 'webp',
          height: 853,
          version: 1669609433,
          duration: null,
          metadata: [],
          public_id: 'food-2203732_1280_gm3dx8',
          created_at: '2022-11-28T04:23:53Z',
          secure_url:
            'https://res.cloudinary.com/dmxoarerm/image/upload/f_auto/q_auto:best/v1669609433/food-2203732_1280_gm3dx8.webp',
          resource_type: 'image',
          original_url:
            'http://res.cloudinary.com/dmxoarerm/image/upload/v1669609433/food-2203732_1280_gm3dx8.webp',
          original_secure_url:
            'https://res.cloudinary.com/dmxoarerm/image/upload/v1669609433/food-2203732_1280_gm3dx8.webp',
          raw_transformation: 'f_auto/q_auto:best',
        },
      ],
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  '.gitkeep File <strong>.gitkeep</strong> thường được biết đến như là cách để có thể commit một thư mục trống lên trong quá trình thiết kế cấu trúc thư mục cho dự án của bạn. Ví dụ cấu trúc một website đơn…\n\n',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      content: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '.gitkeep',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'File ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: '.gitkeep',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ' thường được biết đến như là cách để có thể commit một thư mục trống lên trong quá trình thiết kế cấu trúc thư mục cho dự án của bạn.Ví dụ cấu trúc một website đơn giản:',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [
                  {
                    type: 'code',
                  },
                ],
                value:
                  'src/\n|-- assets/\n  |-- images/\n|-- styles/\n  |-- main.css\nindex.html\n[README.md](<http://readme.md/>)',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  '\nNếu không có .gitkeep trong thư mục “images” thì mình không thể commit cả hai thư mục “assets” và “images” lên repo được, kết quả là không giữ được cấu trúc thư mục như trên(hình 1)Và đây là kết quả khi đặt .gitkeep trong thư mục “images”, cấu trúc thư mục sẽ được đảm bảo(hình 2)Câu hỏi đặt ra là: tại sao lại là .gitkeep? Có thể dùng file khác thay thế được không?Trả lời: ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'CÓ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ' thể dùng file khác thay thế! Ví dụ: text.txt hay thậm chí là .gitignoreTuy nhiên vì mục đích của file này là giữ cho một thư mục có thể trống, theo nghĩa đen của nó, nên theo cách làm tiêu chuẩn sẽ là một file có đủ ý nghĩa trên:– .gitkeep là file ẩn– .gitkeep mang ý nghĩa đúng với vai trò của nóHi vọng bạn sẽ nhớ đến .gitkeep khi cần commit thư mục trống và hiểu thêm vì sao lại dùng bạn ấy nhé! Cơ mà nói chứ bạn sẽ ít xài lắm, vì thư mục có khi nào trống đâu haha.Bài viết gốc nằm trên blog của mình ở ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/gitkeep/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'đây',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      view: 380,
      categories: ['short-posts', 'blog'],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'ont2c8ajcvde',
        },
      },
    },
  },
  {
    fields: {
      title: 'Các bài viết ngắn – phần 2',
      slug: 'cac-bai-viet-ngan-phan-2',
      heroImage: [
        {
          url: 'http://res.cloudinary.com/dmxoarerm/image/upload/f_auto/q_auto:best/v1669609432/notepad_jgkxhv.webp',
          tags: [],
          type: 'upload',
          bytes: 23776,
          width: 1280,
          format: 'webp',
          height: 853,
          version: 1669609432,
          duration: null,
          metadata: [],
          public_id: 'notepad_jgkxhv',
          created_at: '2022-11-28T04:23:52Z',
          secure_url:
            'https://res.cloudinary.com/dmxoarerm/image/upload/f_auto/q_auto:best/v1669609432/notepad_jgkxhv.webp',
          resource_type: 'image',
          original_url:
            'http://res.cloudinary.com/dmxoarerm/image/upload/v1669609432/notepad_jgkxhv.webp',
          original_secure_url:
            'https://res.cloudinary.com/dmxoarerm/image/upload/v1669609432/notepad_jgkxhv.webp',
          raw_transformation: 'f_auto/q_auto:best',
        },
      ],
      description: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  '“The Tao of Warren Buffet” – “Đạo của Warren Buffet” “The Tao of Warren Buffet” – “Đạo của Warren Buffet” là một cuốn sách mỏng chứa những lời thông thái của ông được người con dâu Mary Buffet và những…\n\n',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      content: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '“The Tao of Warren Buffet” – “Đạo của Warren Buffet”',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  '“The Tao of Warren Buffet” – “Đạo của Warren Buffet” là một cuốn sách mỏng chứa những lời thông thái của ông được người con dâu Mary Buffet và những người kề cận ghi lại.Dù mình không rành về đầu tư nhưng khi đọc các nội dung này mình cảm nhận được ông là một người sống vô cùng giản dị, có những nguyên tắc sống đơn giản nhưng sâu sắc về đầu tư và cuộc sống.Dưới đây là 6 câu nói mà mình tâm đắc nhất: “Bạn nên học từ kinh nghiệm, nhưng tốt nhất nên học từ kinh nghiệm của người khác nhiều hơn.” “Xây dựng danh tiếng mất 20 năm nhưng phá hủy chỉ cần năm phút. Nếu bạn nhớ đến điều này, bạn sẽ hành động khác đi.” “Tôi không cố gắng nhảy qua mức xà cao trên 2 mét. Tôi nhìn quanh và kiếm những mức xà chừng vài ba tấc để bước qua.” “Sợi dây xích thói quen nhẹ đến mức rất khó có thể cảm nhận nhưng cũng nặng đến mức rất khó gỡ bỏ.” “Sẽ đến một lúc bạn nên bắt đầu chỉ làm những gì bạn muốn. Hãy làm một công việc bạn yêu thích. Bạn sẽ nhảy bật dậy khỏi giường mỗi buổi sớm. Tôi nghĩ bạn thật điên rồ nếu cứ tiếp tục với những công việc mình không thích chỉ để tô đẹp hồ sơ xin việc của mình. Cái này nghe sao giống như để dành ham muốn cho lúc tuổi già thế?” “Quản lý sự nghiệp bản thân cũng giống như đầu tư – mức độ khó khăn không được tính đến. Vì vậy bạn có thể tiết kiệm được tiền bạc và công sức bằng cách chọn đúng chuyến tàu cần lên.”\n—\nCòn bạn thì sao? Bạn thích câu nói nào của nhà đầu tư vĩ đại này?\nHãy đọc link tóm tắt các câu nói ở ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/dao-cua-warren-buffet/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'bài blog này',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Goodbye IE',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Trình duyệt Internet Explorer(IE) chính thức bị khai tử vào hôm nay 15/6Ra đời vào năm 1995, IE trở thành trình duyệt với tiêu chuẩn toàn cầu, đánh bại Netscape trong cuộc chiến trình duyệt, từng chiếm thị phần 65% tại thời điểm đầu năm 2009.Tuy nhiên, thị phần của IE đã giảm sút mạnh mẽ đến nay chỉ còn dưới 1%. Vì vậy việc khai tử này chỉ là vấn đề thời gian.Một trong những nguyên nhân là việc IE không tuân thủ xác tiêu chuẩn mới về công nghệ web, như việc không hoạt động tốt với JavaScript, … IE thực sự là nỗi ám ảnh của những lập trình viên làm web.Vậy là sau 27 năm tồn tại, cuối cùng đã đến lúc chia tay một tượng đài trình duyệt đã từng vĩ đại.Việc IE bị khai tử đã làm Nhật Bản khá đau đầu vì khá nhiều trang web của các cơ quan chính phủ, tổ chức tài chính, các công ty, … đang vận hành các trang web chỉ hỗ trợ IE.Các trình duyệt được sử dụng nhiều nhất hiện nay là Google Chrome, Microsoft Edge, Firefox, Opera.Đọc thêm ở ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.kcra.com/article/say-goodbye-internet-explorer-is-officially-retiring-heres-when/40292245',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'bài viết này',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '. ',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Code review là một phần tất yếu của dự án',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Code review nên là một phần tất yếu của dự án Với fresher developer hay developer mới tham gia dự án, việc một PR(pull request) hay MR(merge request) của mình nhận được nhiều comments từ những thành viên khác có thể là quá tải và bạn đôi khi sẽ không tin được rằng có mình lại có nhiều lỗi sai đến vậy  Tuy nhiên, nếu nhận được review chất lượng, có tính đóng góp cao thì bạn sẽ ngày càng có code chất lượng hơn, đồng nghĩ với you are a better as a programmer.Dưới đây là các lợi ích của code review mà mình tóm tắt từ bài post này1. Giúp bạn hiểu hơn về code của dự án2. Bạn sẽ học được nhiều cách để tiếp cận vấn đề hơn3. Bạn có thể gợi ý cho người khác những cách tiếp cận tốt hơn(theo bạn nghĩ)4. Giảm thời gian QA và tăng hiệu suất làm việc của team, vì review kỹ thì sẽ giảm các vấn đề nảy sinh5. Giảm các lỗi trên production khi các edge case(trường hợp ngách) được nhận ra trong quá trình review6. Giúp nhận ra các bottlenecks(vấn đề nguy hiểm) hay leak memories(rò rỉ bộ nhớ) sớm hơn7. Giúp giảm code bị lặp và tăng việc tái sử dụngCác bạn có thể ghé đọc thêm chi tiết và ví dụ ở ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://loyalty.dev/posts/lessons-ive-learnt-as-a-code-reviewer',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'bài này',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '. Chúc các bạn review code vui vẻ không quạu nha ',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Tài liệu Tech tiếng Việt',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Khi mới bước chân vào nghề lập trình , mình được các anh chị đi trước khuyến khích là nên đọc tất cả các nguồn tài liệu bằng tiếng Anh, để có thể nâng cao khả năng về ngôn ngữ này cũng như việc làm việc với khách hàng quốc tế thêm nhiều thuận lợi. Những lời khuyên trên là vô cùng đúng đắn, mình đã áp dụng và thật sự hiệu quả  Tuy nhiên, sau nhiều năm làm việc, mình nhận ra quan điểm trên là đúng không có nghĩa là hoàn toàn không nên đọc các nguồn tài liệu bằng tiếng Việt, ngôn ngữ mẹ đẻ của bạn, ngôn ngữ mà bạn hiểu tận chân tơ kẽ tóc. Đôi khi có những chủ đề mình đọc tiếng Anh không hiểu gì cả , lúc đó những tài liệu tiếng Việt viết cùng chủ để là vô cùng đáng giá, giúp mình nắm bắt nhanh hơn rất nhiều Đặc biệt thêm nữa, nếu bạn đi làm và muốn chia sẻ, muốn hiểu sâu hơn vấn đề mình gặp, hãy đọc tiếng anh  và hãy viết tiếng Việt (nếu tiếng Anh bạn chưa đủ giỏi hay bạn không thỏa mái khi phải viết tiếng Anh). Vì tiếng Việt là những gì thân thuộc nhất, công cụ thân thuộc nhất  giúp chuyển đổi các ý tưởng trong đầu ra một sản phẩm trên văn bản , thêm nữa nó sẽ giúp bạn đỡ lười hơn ấy  Cuối cùng, để chứng minh cho mọi người thấy dev Việt mình không thiếu người giỏi , và có nhiều cộng đồng nói tiếng Việt  về lập trình khá mạnh cũng như nhiều nguồn tài liệu tiếng Việt :1.  ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://m.facebook.com/groups/1177470863076165/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'VietTech Group',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' – Cộng đồng người Việt với hơn 10,000 thành viên làm trong ngành công nghệ là một con số vô cùng lớn. Mọi người chia sẻ các câu chuyện trong ngành, những kinh nghiệm, kỹ năng phỏng vấn và nhiều nguồn tài liệu rất hay.2.  ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.webuild.community/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'WeBuild Community',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' – Cộng đồng lập trình viên người Việt ở nhiều nơi chủ yếu hoạt động trên ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://webuild.slack.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Slack',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' và cả Discord với gần 5,000 thành viên. WeBuild còn có một cộng đồng blogger viết về tech trên ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://read.webuild.community/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'WeBlog',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', có tổ chức các sự kiện offline như WeBuildDay, nơi nằm vùng của blogger nổi tiếng ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'http://thefullnack.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'thefullnack.com',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '(',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://snacky.blog/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'snacky.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: 'blog) và mình(',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'beautyoncode.com',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ') cũng có trong hội này ^^3.  Kipalog – KeepALog, là một nền tảng chia sẻ kiến thức cho lập trình viên, founder là anh Huydx và anh Trung(cũng là admin bên WeBuild). ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://kipalog.com/users/BeautyOnCode',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      'Các bài viết của BeautyOnCode cũng được chia sẻ trên đây',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', với hơn 200 người theo dõi.4.  ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://viblo.asia/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Viblo',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' – Là một nền tảng chia sẻ về Công nghệ thông tin, với hơn 85,000 active user, hơn 30,000 bài viết về tech được public trên đây. BeautyOnCode cũng có mặt trên Viblo với hơn 20,000 lượt xem, 30 bài viết và gần 1,300 reputations. ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://viblo.asia/u/BeautyOnCode',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Theo dõi mình trên Viblo nhé!',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  '5.  Ngoài ra cũng không thể thiếu các blogger hoạt động tự do trong việc chia sẻ các kiến thức và kinh nghiệm lập trình như: ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://toidicodedao.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Tôi đi code dạo',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://codeaholicguy.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Codeaholicguy',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://huyenchip.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Huyền Chip',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://thefullsnack.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'The Full Snack(Huy Trần)',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://ngochieu.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Ngọc Hiếu(tác giả podcast hieu.tv)',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.asktester.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Ask Tester(Huỳnh Công Thành)',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://viethungnguyen.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Việt Huỳnh Blog',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '(cựu tổng giám đốc KMS Technology), ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'http://www.giaosucan.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Giáo Sư Cẩn',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  '. Cuối cùng cho mình giới thiệu ké blog của mình nữa nha ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'BeautyOnCode',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  'Hi vọng bài viết này sẽ mở ra cho mọi người một góc nhìn khác về người Việt trong ngàng công nghệ nhé ',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Chuyện tiếng Anh',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Thời buổi này bạn phải biết tiếng Anh, nếu muốn có một vé đến với văn minh thế giới. Tiếng anh được hơn 50 nước với hơn 2 tỉ người sử dụng làm ngôn ngữ chính thức và trùng hợp là họ rất giàu.Với dev thì lại càng gian nan vì hầu như 99% các công trình nghiên cứu, sách báo, tài liệu đều ở ngôn ngữ này.Nhưng con đường học tiếng Anh của người Việt sao mà khổ trăm bề  Mang tiếng được học tiếng Anh từ tận mẫu giáo, cấp một nhưng ruốc cuộc thì lại không phát âm nổi một chữ đơn giản chứ đừng nói là giao tiếp. Vì ở trường người ta dạy tiếng anh để thi cử, chứ không phải dạy để giao tiếp  Chưa kể đến giáo viên dạy tiếng Anh ở trường dở thiệt. Một vài kinh nghiệm học ngoại ngữ để dùng:1.  Cách học phát âm tốt nhất là bắt chước. Hãy chọn cho mình một khuôn mẫu, bạn thích giọng Anh, Mỹ, Úc hay gì đó hay idol nào đó của bạn rồi bắt chước the o Mình thầy học Duolingo and Elsa Speak cũng phát âm rất tốt, chỉ mỗi tội là nó hơi chán. Nếu bạn học thứ gì bạn thực sự thích và muốn tìm hiểu sẽ cải thiện được điểm này.2.   Quên ngữ pháp đi Vì phản xạ mà đợi ráp ngữ pháp cho đúng chắc tới … chiều, chưa kể các sách dạy ngữ pháp hay ngoại ngữ đa phần là lỗi thời.3.   Chỉ cần nói tiếng anh thôi, đừng quan tâm tới giọng(accent) Cái này nghe có vẻ ngược đời, vì hầu như mọi người đều cổ xúy chuyện phát âm cho chuẩn giọng Anh, Mỹ. Cái này chỉ là quảng cáo ở các trung tâm Anh ngữ để dễ lấy tiền hơn thôi bạn à. Tất nhiên là nếu bạn nói chuẩn thì quá tốt rồi, nhưng nếu không thì cũng không sao đâu. Tự tin quan trọng hơn ấy. Khi cần, bạn chỉ cần nói tiếng Anh là được, giọng Việt Nam hay giọng Ấn gì cũng được tuốt, lúc đó người ta quan tâm tới thông tin bạn cung cấp chứ ai hơi đâu mà để ý cái giọng, chưa kể người bản sứ họ biết rõ và tự điều chỉnh giọng họ chậm lại cho phù hợp với bạn nữa.Mình có đọc hai bài về chuyện tiếng anh dưới góc nhìn của các dev Việt ở nước ngoài ở ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://open.spotify.com/episode/4N1VjeQb8QwUtFMgbxDYL9?si=s5P8qVDiR7SMJdx3drEsvA&context=spotify%3Ashow%3A0Hrhdy5JLWpZo47ekcxRJO',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'đây',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', mời bạn ghé nghe nhé.Chúc mọi người tự tin với tiếng Anh của mình.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'StackOverflow Survey Result 2022',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'StackOverflow vừa gửi đến cộng đồng lập trình viên kết quả của cuộc khảo sát với hơn 70,000 lập trình viên(LTV) trên toàn thế giới tham gia.Một số điểm thú vị ở kết quả này mà mình thu được là:1. Đa số LTV trên 45 tuổi học từ sách, còn người trẻ hơn thì học từ các khóa học hay chứng chỉ trực tuyến.2. Docker nay đã đồng hành cùng Git trở thành công cụ cơ bản của mọi LTV3. Rust là ngôn ngữ được LTV yêu thích nhất, tiếp đến là Python, Typescript4. Angular.js liên tiếp 3 năm được xem là đáng lo ngại nhất. React.js liên tiếp 5 năm được xem là được mong muốn nhất.5. 85% LTV cho biết công ty của họ cho phép được làm việc từ xa6. 62% LTV cho biết họ giành hơn 30 phút mỗi ngày để tìm kiếm cách giải quyết các vấn đềMời bạn đọc thêm về các số liệu rất thú vị này ở bản kết quả đầy đủ ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://survey.stackoverflow.co/2022/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'đây',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ' nhé, có các biểu đồ rất dễ nhìn.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Lộ trình lên đai của lập trình viên',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Một định hướng phát triển nghề nghiệp rõ ràng sẽ giúp bạn định hướng mình đang ở đâu, đang đi theo hướng nào và sẽ là ai trong năm hay mười năm tới Got It AI Blog giới thiệu về ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: '“Lộ trình lên đại của lập trình viên”',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ' vô cùng chi tiết và sinh động với các hình vẽ minh họa Giai đoạn đầu tiên mà bất cứ ai cũng phải đi qua gọi là ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: '“Starting Track”',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ', với 3 cột mốc lần lượt là:1. Junior Software Engineer hay Software Engineer Intern2. Software Engineer3. Senior Software Engineer with Tech Lead add-onSau giai đoạn đầu, bạn sẽ đứng ở ngã ba đường, nơi bạn có hai hướng để đi: ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: '“Individual Contributor Track”',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: ' hoặc là ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: '“Managerial Track”',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: 'Với ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: '“Individual Contributor Track”',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ', có 3 cột mốc lần lượt là:1. “Staff Engineer”2. “Senior Staff Engineer”3. “Principal Engineer”Với',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: ' “Managerial Track”',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ', có 3 cột mốc lần lượt là:1. “Engineering Manager”2. “Director of Manager”3. “Vice President of Engineering”Qua đây bạn có thể thấy nếu một lập trình viên không thích làm quản lý thì con đường “Individual Contributor” là hoàn toàn khả thi và có khi còn có mức lương khủng hơn manager nữa. Nếu quan tâm bạn hãy tìm hiểu kỹ để chọn con đường phù hợp với kỹ năng của mình nhé Bạn có thể ghé đọc ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://vn.got-it.ai/blog/software-engineer-zero-to-hero',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'bài viết chi tiết',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ' ở GotIt AI Blog.\n\n',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      view: 380,
      categories: ['short-posts', 'blog'],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'ont2c8ajcvde',
        },
      },
    },
  },
]

export const MOCK_DATA_ABOUT_PAGE = [
  {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'ont2c8ajcvde',
        },
      },
      id: '5LoRwWs2ZwjaYn8ptF3v2j',
      type: 'Entry',
      createdAt: '2022-11-17T09:08:08.574Z',
      updatedAt: '2022-11-17T09:12:43.422Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 3,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'author',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name: 'Thanh Nguyễn',
      blog: 'beautyoncode',
      avatar: [
        {
          url: 'https://images.ctfassets.net/ont2c8ajcvde/2q42Qytnxy63qAgEQgSG67/7ad54dfe423bf8253b7e2094ece12262/avatar.png',
        },
      ],
      introduceYourself: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Xin chào, tôi là ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                  {
                    type: 'bold',
                  },
                ],
                value: 'Thanh Nguyễn (Nguyễn Diễm Thanh)',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: ' – tác giả của blog ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  '.Tôi sinh ra và lớn lên ở Đà Nẵng và hiện cũng đang sống và làm việc tại đây. Tôi từng nghĩ mình sẽ trở thành nhà thiết kế đồ họa nhưng nghề lập trình đã chọn mình. Hiện tôi đang làm ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'Web Developer tại ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.agilityio.com/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'AgilityIO',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' một công ty có văn phòng ở NewYork, Mỹ và đội ngũ phát triển ở Việt Nam. Nếu bạn muốn tìm hiểu thêm về công ty này, có thể xem thêm các video: ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.youtube.com/watch?v=EwOuGsrYmGA',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'AgilityIO',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.youtube.com/watch?v=ci9QZbNLct0',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'Life At AgilityIO',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: '. ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  'Công việc \bcủa tôi xoay quanh việc lập trình, sử dụng công nghệ như một giải pháp \u001dcùng khách hàng của mình tạo ra các sản phẩm tốt cho người dùng.  ',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Trong quá trình học lập trình từ con số 0 của mình, tôi nhận ra nhiều điều thú vị, tôi đã nhìn lập trình ở góc nhìn của một người thiết kế sản phẩm(designer), của một người phân tích sản phẩm(business analyst) và của người dùng(user). Tôi thấy bản thân họ là mình và mình cũng là họ, chúng tôi có những mối tương quan sâu sắc và có cùng một mục tiêu, là sử dụng công nghệ để giải quyết các vấn đề. Lập trình rõ là không dễ, và tôi thích đều đó, tôi thích tính chất của công việc này, đó là sự thay đổi không ngừng, sự học không ngừng nghỉ và nó dạy cho tôi thật nhiều về sự khiêm tốn.\nTrong cuộc sống, tôi cũng đang có một hành trình vô cùng thú vị, từ một con bé tomboy cá tính trở thành một người phụ nữ lập gia đình và có con. Tôi cũng đã nuôi một ước mơ từ thời sinh viên là vừa có thể kiếm tiền trang trải cuộc sống vừa có thể được làm thiện nguyện cống hiến cho cộng đồng, có thể là làm cho một tổ chức phi chính phủ với công việc gì đó chẳng hạn. Tuy đã lâu chưa từng nhắc đến, nhưng nó vẫn cứ ở trong mình, đây cũng là lý do tôi chọn làm ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'tình nguyện viên cho',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: ' ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://steamforvietnam.org/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'STEAM for Viet Nam',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' khi đủ duyên đến.Về viết lách, tôi bắt đầu viết từ rất lâu rồi, từ cấp ba tôi đã có cuốn truyện riêng của mình tự viết, nhưng đã bị thất lạc. Tôi thỉnh thoảng rất hay thích viết cho mình, như là một cách để rà soát và cảm nhận, nhưng chưa từng nghiêm túc viết. Sau khi đọc cuốn ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/sach-khi-hoi-tho-hoa-thinh-khong-paul-kalanithi/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: '“Khi hơi thở hoá thinh không”',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', tôi thấy cuộc sống quả là vô thường và bắt đầu suy nghĩ nghiêm túc hơn cho một nơi mà tôi có thể được sống với chính mình, tự học mà không bị ai bắt ép và có thể thoả mái chia sẻ với mình và với mọi người. Đây cũng là các đề tài chủ yếu của blog ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  '.Sau khi tạm chia tay STEAM for Viet Nam, tôi bắt đầu viết tự do nhiều hơn và hiện đang cộng tác cùng ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://careerly.vn/profiles/1140',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'bold',
                      },
                    ],
                    value: 'Careerly',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', là ứng dụng kết nối mạng lưới người Việt làm tại các công ty công nghệ, nơi mình chia sẻ đến bạn đọc các bài viết ngắn về tech.\nBạn có thể liên hệ với tôi qua email beautyoncode@gmail.com hoặc ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.facebook.com/beautyoncode/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'fanpage BeautyOnCode',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      introduceBlog: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  ' là blog viết về lập trình và về những câu chuyện trong cuộc sống của tôi (Thanh) với các đề tài như ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/lap-trinh/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'lập trình',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/hanh-trinh-cua-toi/yeu-ban-than/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'làm blog',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/hanh-trinh-cua-toi/yeu-ban-than/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'italic',
                      },
                      {
                        type: 'underline',
                      },
                    ],
                    value: 'hành trình phát triển bản thân',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', … Hiện BeautyOnCode đang có gần 90 bài viết, bấm vào ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/most-views/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: '“Xem Nhiều Nhất”',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' để đọc các bài viết được đọc giả đọc nhiều nhất. Bạn cũng có thể ghé ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/muc-luc/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: '“Mục lục”',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' để xem các bài viết được chia theo các chuỗi bài cho từng loại chủ đề (Python, Linux, JavaScript, Leetcode, …). Bên cạnh đó, hơn 62 bài viết ở mục ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/category/short-posts/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: '“Bài Viết Ngắn”',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ', là những góc nhìn về công nghệ, giới thiệu các tin tức, nguồn tài liệu, … Và cuối cùng là một ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/podcast/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'podcast',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' với hơn 60 episodes về các bài viết tự do, các bài viết từ blog khác và sách.Về ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                  {
                    type: 'italic',
                  },
                ],
                value: 'tên blog này',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: ', nó có nhiều ý nghĩa khác nhau. Trước hết, “',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  '” là bút danh tôi tự đặt cho mình, cho nó ngầu ấy mà, ý là một người phụ nữ trong ngành lập trình, tôi muốn viết về trải nghiệm của mình trong lĩnh vực này. Ngoài ra, “',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'bold',
                  },
                ],
                value: 'BeautyOnCode',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value:
                  '” còn có ý nghĩa là nét đẹp của code nữa, tôi thấy nó đẹp vì nghề này, không mang nghiệp nặng gì, chỉ đơn thuần là làm việc trên máy tính, tôi còn thấy đa phần mọi người làm trong ngành đến hướng thiện, đều là những người tốt nên tôi thấy danh xưng này rất là xứng đáng.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Nếu bạn yêu thích BeautyOnCode, bạn có thể đăng ký theo dõi blog ở form bên dưới hoặc trang ở ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'http://eepurl.com/hJr_g9',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'đây',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: ', hoặc follow ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://www.facebook.com/beautyoncode/',
                },
                content: [
                  {
                    data: {},
                    marks: [
                      {
                        type: 'underline',
                      },
                      {
                        type: 'italic',
                      },
                    ],
                    value: 'fanpage',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value:
                  ' này nha.Bạn cũng có thể cùng mình duy trì blog này bằng cách ủng hộ mình ở trang ',
                nodeType: 'text',
              },
              {
                data: {
                  uri: 'https://beautyoncode.com/support/',
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Support Me',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'hyperlink',
              },
              {
                data: {},
                marks: [],
                value: '.',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [
                  {
                    type: 'italic',
                  },
                ],
                value: 'Chúc bạn một ngày tốt lành!',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [],
                value: 'Thanh Nguyễn',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
      description:
        'Cám ơn bạn đã ghé thăm blog BeautyOnCode! Hãy để tôi làm quen với bạn bằng câu chuyện của tôi và của blog này bằng lời kể của mình nha.',
    },
  },
]
