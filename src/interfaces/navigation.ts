export interface NavigationProps {
  navigation: { navigate(route: string, params?: {}): void; goBack(): void };
  route: { key: string; name: string; params?: {} };
}
