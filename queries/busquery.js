const searchBusQuery = `
  query busRoute($input: BusRouteInput) {
    busRoute(input: $input) {
      logo_url
      uuid
      correlation_id
      main_gate_departure_date_time
      main_gate_arrival_date_time
      main_gate_source_name_en
      main_gate_source_name_mm
      departure_date_time
      est_arrival_date_time
      source_name_en
      source_name_mm
      destination_name_en
      destination_name_mm
      operator_name_en
      operator_name_mm
      gate_name_en
      gate_name_mm
      main_gate_name_en
      main_gate_name_mm
      route_name_mm
      route_name_en
      bus_no
      bus_type_name_mm
      bus_type_name_en
      seat_list
      number_of_ticket
      bus_type
      operator_code
      search_params {
        from
        to
        travel_date
        no_of_passengers
        foreigner
        class_type_id
      }
      sp
      sf
      or
      gb
      nb
      tf
      mar
      currency
      fare_breakdowns {
        availability
        citizen
        currency
        mar_percentage
        sp
        sf
        or
        gb
        nb
        tf
        mar
      }
    }
  }
`;

const seatPlanQuery = `
  query busSeatPlan($input: busSeatPlanInput) {
    busSeatPlan(input: $input) {
      uuid
      correlation_id
      main_gate_departure_date_time
      main_gate_arrival_date_time
      main_gate_source_name_en
      main_gate_source_name_mm
      departure_date_time
      est_arrival_date_time
      source_name_en
      source_name_mm
      destination_name_en
      destination_name_mm
      operator_name_en
      operator_name_mm
      gate_name_en
      gate_name_mm
      main_gate_name_en
      main_gate_name_mm
      route_name_mm
      route_name_en
      bus_no
      bus_type_name_mm
      bus_type_name_en
      number_of_ticket
      operator_code
      search_params {
        from
        to
        travel_date
        no_of_passengers
        foreigner
      }
      sp
      sf
      or
      gb
      nb
      tf
      mar
      currency
      fare_breakdowns {
        citizen
        currency
        mar_percentage
        sp
        sf
        or
        gb
        nb
        tf
        mar
      }
      bus_type {
        bus_type_name_en
        bus_type_name_mm
        num_of_row
        num_of_column
        num_of_level
        aisle_column
      }
      seat_list {
        seat_id
        seat_no
        seat_type
        row
        column
        level
        seat_status_type
        traveller_group_type
      }
      logo_url
    }
  }
`;

module.exports = {
  searchBusQuery,
  seatPlanQuery,
};
