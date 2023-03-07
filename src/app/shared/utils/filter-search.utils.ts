import { Person } from '../../interfaces/population.interface'

type PersonKeys = keyof Person

export const filterPersonsBySearchKeyValue = (
  persons: Person[],
  searchValue: string
) => {
  if (!searchValue) return persons
  if (!persons) return []
  return persons.filter((person) => {
    return Object.keys(person).some((personProperty) =>
      person[personProperty as PersonKeys]
        .toString()
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    )
  })
}
