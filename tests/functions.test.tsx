import { transformDate } from "../utils/functions"

test("test-formatting date match", () => {
  const newDate = transformDate("2020-02-06T14:00:00+00:00")
  const date2 = transformDate("2023-05-28T15:30:00+00:00")

  expect(newDate).toStrictEqual({ day: "06.02", hour: "15:00" })
  expect(date2).toStrictEqual({ day: "28.05", hour: "17:30" })
})
