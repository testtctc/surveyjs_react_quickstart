export var json = {
    title: "电影反馈",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "position",
            title: "请选择您的职业...",
            colCount: 0,
            choices: [
              "1|Designer",
              "2|Front-end Developer",
              "3|Back-end Developer",
              "4|Database Administrator",
              "5|System Engineer"
            ]
          },
          {
            type: "dropdown",
            renderAs: "select2",
            choicesByUrl: {
              url: "https://restcountries.eu/rest/v1/all"
            },
            name: "countries",
            title: '国籍'
          },
          {
            name: "date",
            type: "datepicker",
            inputType: "date",
            title: "您的出生日期",
            dateFormat: "mm/dd/yy"
          },
          {
            type: "barrating",
            name: "barrating1",
            ratingTheme: "css-stars",
            title: "您对产品的评价",
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "imagepicker",
            name: "choosepicture",
            title: "您最喜欢电影中的哪个场景",
            choices: [
              {
                value: "lion",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                value: "giraffe",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
              },
              {
                value: "panda",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                value: "camel",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ]
          },
          {
            type: "bootstrapslider",
            name: "请您对背景音乐评分"
          },
          {
            type: "signaturepad",
            name: "sign",
            title: "请您手写签名"
          },
          {
            type: "sortablelist",
            name: "lifepriopity",
            title: "请对以下项目进行排序",
            colCount: 0,
            choices: ["家庭", "工作", "宠物", "旅行", "游戏"]
          }
        ]
      },
      {
        questions: [
          {
            type: "matrix",
            name: "Quality",
            title:
              "您对以下观点是否赞成",
            columns: [
              {
                value: 1,
                text: "强烈不赞成"
              },
              {
                value: 2,
                text: "不赞成"
              },
              {
                value: 3,
                text: "中立"
              },
              {
                value: 4,
                text: "同意"
              },
              {
                value: 5,
                text: "强烈同意"
              }
            ],
            rows: [
              {
                value: "本电影是可接受的",
                text: "本电影是可接受的"
              },
              {
                value: "本电影的演员颜值很高",
                text: "本电影的演员颜值很高"
              },
              {
                value: "演员很用心",
                text: "演员很用心"
              },
              {
                value: "我会向其他人推荐",
                text: "我会向其他人推荐"
              }
            ]
          },
          {
            type: "rating",
            name: "satisfaction",
            title: "你喜欢这部电影吗?",
            mininumRateDescription: "不喜欢",
            maximumRateDescription: "很喜欢"
          },
          {
            type: "rating",
            name: "向周围的人推荐次数",
            visibleIf: "{satisfaction} > 3",
            title:
              "你会向其他人推荐吗？",
            mininumRateDescription: "我不推荐",
            maximumRateDescription: "我将推荐"
          },
          {
            type: "comment",
            name: "suggestions",
            title: "你觉得本电影还有什么需要改进的？"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "price to competitors",
            title: "相对于其他电影，您觉得本电影票价如何",
            choices: [
              "不贵",
              "差不多",
              "很贵",
              "不确定"
            ]
          },
          {
            type: "radiogroup",
            name: "price",
            title: "您觉得我们的产品物超所值吗",
            choices: [
              "我觉得刚好",
              "我觉得很值",
              "我觉得虚高"
            ]
          },
          {
            type: "multipletext",
            name: "pricelimit",
            title: "您的承受能力",
            items: [
              {
                name: "mostamount",
                title: "最高价"
              },
              {
                name: "leastamount",
                title: "最低价"
              }
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "text",
            name: "email",
            title:
              '请填写您的邮箱'
          }
        ]
      }
    ]
};