const MenuItems = [
    "Dashboard",
    "Projetos",
    "Tarefas",
    "Equipe",
    "Calendario",
]

export default function Sidebar() {
    return (
        <aside>
            <h2>Nexora</h2>
            <nav>
                {MenuItems.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </nav>
        </aside>
    )
}