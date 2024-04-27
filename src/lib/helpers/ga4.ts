import { GA4EventPayload } from '../types/ga4-event'

export const sendGA4Event = async (payload: GA4EventPayload) => {
  const clientId = '123456.7654321'
  const body = {
    client_id: clientId,
    events: [
      {
        name: payload.name,
        params: {
          ...payload.params,
          session_id: '123',
          engagement_time_msec: 100,
        },
      },
    ],
  }

  const response = await fetch(
    `${'https://www.google-analytics.com/mp/collect'}?measurement_id=${'G-CCR7P4N45X'}&api_secret=${'T_xjBnSzQ-Oe37pvUIXNlQ'}`,
    {
      method: 'POST',
      body: JSON.stringify(body),
    }
  )
  return response
}
