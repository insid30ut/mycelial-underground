export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (/** @type {any} */ Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (/** @type {any} */ Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'brief_description',
      title: 'Brief Description',
      type: 'text',
      rows: 3,
      validation: (/** @type {any} */ Rule) => Rule.max(200)
    },
    {
  name: 'full_content_body',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'image' },
    // ADD THIS SECTION FOR YOUTUBE
    {
      name: 'youtube',
      type: 'object',
      title: 'YouTube Embed',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'YouTube Video URL'
        }
      ],
      preview: {
        select: {
          url: 'url'
        },
        component: (props) => {
          /* Optional: Custom preview in studio */
          return <div>▶️ YouTube: {props.value.url}</div>
        }
      }
    }
  ]
},
    {
      name: 'published_at',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}