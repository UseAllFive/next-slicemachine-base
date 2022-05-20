// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'page':
      return `/${doc.uid}`
    default:
      return null
  }
}
