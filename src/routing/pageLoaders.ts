let projectDetailPagePromise: ReturnType<typeof importProjectDetailPage> | undefined

function importProjectDetailPage() {
  return import('../pages/ProjectDetailPage')
}

export function loadProjectDetailPage() {
  projectDetailPagePromise ??= importProjectDetailPage()
  return projectDetailPagePromise
}

export function preloadProjectDetailPage() {
  void loadProjectDetailPage()
}
