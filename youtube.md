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
}
3. Deploy Stud