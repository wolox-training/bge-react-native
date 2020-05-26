export interface NavigationProps {
  navigation: { navigate(route: string, param: {}): void; goBack(): void };
}
