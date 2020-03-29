import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import API from '../../services/api';

import logoImg from '../../assets/logo.png';
import S from './styles';

export default function Incidents(){
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  let [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigationToDetail(incident) {
    navigation.navigate('Detail', { incident });
  };

  async function loadIncidents() {
    if (loading) return;
    if (total > 0 && incidents.length === total ) return;

    setLoading(true);

    const response = await API.get('incidents', { params: page });
    
    setIncidents([ ...incidents, ...response.data ]);
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false);
  };

  useEffect(() => {
    loadIncidents();
  }, [incidents]);

  return (
    <View style={S.container}>
      <View style={S.header}>
        <Image source={logoImg} />
        <Text style={S.headerText}>
          Total de <Text style={S.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>
      <Text style={S.title}>Bem-vindo!</Text>
      <Text style={S.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        style={S.incidentList}
        keyExtractor={incident => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={S.incident}>
            <Text style={S.incidentProperty}>ONG:</Text>
            <Text style={S.incidentValue}>{incident.name}</Text>

            <Text style={S.incidentProperty}>CASO:</Text>
            <Text style={S.incidentValue}>{incident.title}</Text>

            <Text style={S.incidentProperty}>VALOR:</Text>
            <Text style={S.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                currency: 'BRL',
                style: 'currency'
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={S.detailsButton}
              onPress={() => navigationToDetail(incident)}
            >
              <Text style={S.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name='arrow-right' size={24} color='#E02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};