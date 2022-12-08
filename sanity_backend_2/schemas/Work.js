export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields:[
        {
            name:'projectType',
            title: 'Project Type',
            type: 'string'
        },
        {
            name:'title',
            title: 'Title',
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
        },
        {
            name: 'description',
            title: 'Project Description or Notes to Share',
            type: 'string'
        }

    ]
}