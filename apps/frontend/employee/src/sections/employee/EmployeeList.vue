<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Select from 'primevue/selectbutton';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const customers = ref([
  {
    id: 1000,
    name: 'Ioni Bowcher',
    country: { name: 'United States', code: 'US' },
    representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
    status: 'unqualified',
    verified: true,
    date: '2023-10-01',
  },
  {
    id: 1001,
    name: 'Ioni Bowcher',
    country: { name: 'United States', code: 'US' },
    representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
    status: 'qualified',
    verified: true,
    date: '2023-10-01',
  },
  {
    id: 1002,
    name: 'Ioni Bowcher',
    country: { name: 'United States', code: 'US' },
    representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
    status: 'new',
    verified: true,
    date: '2023-10-01',
  },
]);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  status: { value: null, matchMode: FilterMatchMode.EQUALS },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});
const representatives = ref([
  { name: 'Amy Elsner', image: 'amyelsner.png' },
  { name: 'Anna Fali', image: 'annafali.png' },
  { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
  { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
  { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
  { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
  { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
  { name: 'Onyama Limba', image: 'onyamalimba.png' },
  { name: 'Stephen Shaw', image: 'stephenshaw.png' },
  { name: 'XuXue Feng', image: 'xuxuefeng.png' },
]);
const statuses = ref([
  'unqualified',
  'qualified',
  'new',
  'negotiation',
  'renewal',
  'proposal',
]);
const loading = ref(false);

const getCustomers = (data) => {
  return [...(data || [])].map((d) => {
    d.date = new Date(d.date);

    return d;
  });
};
const getSeverity = (status) => {
  switch (status) {
    case 'unqualified':
      return 'danger';

    case 'qualified':
      return 'success';

    case 'new':
      return 'info';

    case 'negotiation':
      return 'warn';

    case 'renewal':
      return null;
  }
};
</script>

<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      :value="customers"
      paginator
      :rows="10"
      dataKey="id"
      filterDisplay="row"
      :loading="loading"
      :globalFilterFields="[
        'name',
        'country.name',
        'representative.name',
        'status',
      ]"
    >
      <template #header>
        <div class="flex justify-end">
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </IconField>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
      <Column field="name" header="Name" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            placeholder="Search by name"
          />
        </template>
      </Column>
      <Column
        header="Country"
        filterField="country.name"
        style="min-width: 12rem"
      >
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <img
              alt="flag"
              src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`flag flag-${data.country.code}`"
              style="width: 24px"
            />
            <span>{{ data.country.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            placeholder="Search by country"
          />
        </template>
      </Column>
      <Column
        header="Agent"
        filterField="representative"
        :showFilterMenu="false"
        style="min-width: 14rem"
      >
        <template #body="{ data }">
          <div class="flex items-center gap-2">
            <img
              :alt="data.representative.name"
              :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
              style="width: 32px"
            />
            <span>{{ data.representative.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <MultiSelect
            v-model="filterModel.value"
            @change="filterCallback()"
            :options="representatives"
            optionLabel="name"
            placeholder="Any"
            style="min-width: 14rem"
            :maxSelectedLabels="1"
          >
            <template #option="slotProps">
              <div class="flex items-center gap-2">
                <img
                  :alt="slotProps.option.name"
                  :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
                  style="width: 32px"
                />
                <span>{{ slotProps.option.name }}</span>
              </div>
            </template>
          </MultiSelect>
        </template>
      </Column>
      <Column
        field="status"
        header="Status"
        :showFilterMenu="false"
        style="min-width: 12rem"
      >
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <Select
            v-model="filterModel.value"
            @change="filterCallback()"
            :options="statuses"
            placeholder="Select One"
            style="min-width: 12rem"
            :showClear="true"
          >
            <template #option="slotProps">
              <Tag
                :value="slotProps.option"
                :severity="getSeverity(slotProps.option)"
              />
            </template>
          </Select>
        </template>
      </Column>
      <Column
        field="verified"
        header="Verified"
        dataType="boolean"
        style="min-width: 6rem"
      >
        <template #body="{ data }">
          <i
            class="pi"
            :class="{
              'pi-check-circle text-green-500': data.verified,
              'pi-times-circle text-red-400': !data.verified,
            }"
          ></i>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <Checkbox
            v-model="filterModel.value"
            :indeterminate="filterModel.value === null"
            binary
            @change="filterCallback()"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>
