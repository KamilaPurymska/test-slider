const teamMembers = {
  team:[
  {
    id: 1,
    name: "Basia Sołtysińska",
    role: "Founder",
    city: "Warsaw",
    avatar: "https://images.unsplash.com/photo-1547806284-8bd41c690311?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 2,
    name: "Włas Chorowiec",
    role: "Founder",
    city: "Warsaw",
    avatar: "https://images.unsplash.com/photo-1546539966-7fe51cbe99c0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 3,
    name: "Edyta Leśniewska",
    role: "Head of Human Resources",
    city: "Warsaw",
    avatar: "https://images.unsplash.com/photo-1547313249-a941bd56c1d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 4,
    name: "Joanna Pawluk",
    role: "Chef Grow Officer (CGO)",
    city: "London",
    avatar: "https://images.unsplash.com/photo-1547733502-e6f75abfff72?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 5,
    name: "David Saunders",
    role: "Business Development",
    city: "London",
    avatar: "https://images.unsplash.com/photo-1546396127-c970e802ffcb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 6,
    name: "Adam Eldridge",
    role: "Business Developmet Director US",
    city: "Los Angeles",
    avatar: "https://images.unsplash.com/photo-1547806284-8bd41c690311?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 7,
    name: "Maha Mahada",
    role: "Chef Business Development Officer (CBDO)",
    city: "Warsaw",
    avatar: "https://images.unsplash.com/photo-1546539966-7fe51cbe99c0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 8,
    name: "Elzbieta Kamińska",
    role: "International Client Service Manager",
    city: "Warsaw",
    avatar: "https://images.unsplash.com/photo-1547313249-a941bd56c1d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 9,
    name: "Karolina Makuch",
    role: "Creation Manager",
    city: "Warsaw",
    avatar: "https://images.unsplash.com/photo-1547733502-e6f75abfff72?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 10,
    name: "Kamil Bolek",
    role: "Head of Communication",
    city: "Warsaw",
    avatar: "https://images.unsplash.com/photo-1546396127-c970e802ffcb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9"
  }
  ]
}
// display list 
$(document).ready(() =>{
  const teamTeamplate = $("#team").html()
  const teamCompiled = Handlebars.compile(teamTeamplate)
  $("#list").html(teamCompiled(teamMembers))
})
