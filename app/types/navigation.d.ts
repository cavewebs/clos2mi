export {}

declare global {
  namespace ReactNavigation {
    // Dummy data and untyped navigators pass route names as string.
    // Keep this index signature until screens use AppStackParamList at call sites.
    interface RootParamList {
      [routeName: string]: object | undefined
    }
  }
}
