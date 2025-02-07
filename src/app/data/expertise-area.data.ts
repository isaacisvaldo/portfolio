import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, monitor, speed, search } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    percent: '60%',
    name: 'Web Development'
  },
  {
    icon: api,
    percent: '90%',
    name: 'API Development'
  },
  {
    icon: mobile,
    percent: '70%',
    name: 'DevOps'
  },
  {
    icon: monitor,
    percent: '92%',
    name: 'Data Enginner'
  },
  {
    icon: speed,
    percent: '75%',
    name: 'Performance Optimization'
  },
  {
    icon: search,
    percent: '68%',
    name: 'Unit Testing'
  },
]

export default expertiseAreaData
