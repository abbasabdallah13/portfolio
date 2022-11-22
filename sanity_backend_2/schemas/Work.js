export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields:[
        {
            name:'description',
            title: 'Description',
            type: 'string'
        },
        {
            name:'imgurl',
            title:'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'giturl',
            title: 'GitURL',
            type:'string'
        }
    ]
}