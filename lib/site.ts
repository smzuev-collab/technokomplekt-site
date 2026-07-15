export type NavChild = { title: string; href: string; description?: string }
export type NavItem = { title: string; href: string; children?: NavChild[] }

export const kitchenCategories: NavChild[] = [
  { title: "Современные кухни", href: "/kitchens/modern", description: "Чистые линии и матовые фасады" },
  { title: "Классические кухни", href: "/kitchens/classic", description: "Благородная традиция и фрезеровка" },
  { title: "Кухни с островом", href: "/kitchens/island", description: "Центр притяжения дома" },
  { title: "Угловые кухни", href: "/kitchens/corner", description: "Эргономика в каждом сантиметре" },
  { title: "Маленькие кухни", href: "/kitchens/compact", description: "Продуманные решения для компактных пространств" },
  { title: "Минимализм", href: "/kitchens/minimalism", description: "Ничего лишнего, только суть" },
  { title: "Неоклассика", href: "/kitchens/neoclassic", description: "Сдержанная роскошь без времени" },
]

export const furnitureCategories: NavChild[] = [
  { title: "Кухни", href: "/kitchens", description: "Индивидуальные кухонные гарнитуры" },
  { title: "Гардеробные", href: "/wardrobes", description: "Системы хранения вашей мечты" },
  { title: "Шкафы", href: "/cabinets", description: "Корпусная мебель на заказ" },
  { title: "Прихожие", href: "/hallways", description: "Первое впечатление о доме" },
  { title: "Гостиные", href: "/living-rooms", description: "Мебель для главной комнаты" },
]

export const mainNav: NavItem[] = [
  {
    title: "Каталог",
    href: "/catalog",
    children: furnitureCategories,
  },
  {
    title: "Кухни",
    href: "/kitchens",
    children: kitchenCategories,
  },
  { title: "Наши проекты", href: "/projects" },
  {
    title: "О компании",
    href: "/about",
    children: [
      { title: "О бренде", href: "/about", description: "История и философия GEOSIDEAL" },
      { title: "Производство", href: "/production", description: "Собственная фабрика полного цикла" },
      { title: "Материалы и фурнитура", href: "/materials", description: "Только проверенные поставщики" },
      { title: "Дизайнерам", href: "/designers", description: "Условия сотрудничества" },
    ],
  },
  { title: "Блог", href: "/blog" },
  { title: "Контакты", href: "/contacts" },
]

export const contacts = {
  phone: "+7 495 000-00-00",
  phoneHref: "tel:+74950000000",
  email: "showroom@geosideal.ru",
  address: "Москва, Дизайн-квартал, ул. Мебельная, 12",
  hours: "Ежедневно 10:00 — 21:00",
  instagram: "GEOSIDEAL",
}
