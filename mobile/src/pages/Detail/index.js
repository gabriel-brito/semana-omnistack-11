import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import S from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  let { 
    city,
    description,
    email,
    name,
    title,
    uf,
    value,
    whatsapp
  } = route.params.incident;
  value = Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(value);
  const message = `Olá, ${name}. Estou entrando em contato, pois gostaria de ajudar no caso "${title}" com o valor de ${value}`;

  function BackToIncidents() {
    navigation.navigate('Incidents');
  };

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${title}`,
      recipients: [`${email}`],
      body: message
    });
  };

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${whatsapp}&text${message}`);
  };
  
  return (
    <View style={S.container}>
      <View style={S.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={BackToIncidents}>
          <Feather name='arrow-left' color='#E02041' size={28} />
        </TouchableOpacity>
      </View>

      <View style={S.incident}>
        <Text style={[S.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={S.incidentValue}>{name} da cidade de {city}/{uf}</Text>

        <Text style={S.incidentProperty}>CASO:</Text>
        <Text style={S.incidentValue}>{title}</Text>

        <Text style={S.incidentProperty}>DESCRIÇÃO:</Text>
        <Text style={S.incidentValue}>{description}</Text>

        <Text style={S.incidentProperty}>VALOR:</Text>
        <Text style={S.incidentValue}>{value}</Text>
      </View>

      <View style={[S.incident, S.contactBox]}>
        <Text style={S.heroTitle}>Salve o dia!</Text>
        <Text style={S.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={S.heroDescription}>Entre em contato:</Text>

        <View style={S.actions}>
          <TouchableOpacity style={S.action} onPress={sendWhatsApp}>
            <Text style={S.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={S.action} onPress={sendMail}>
            <Text style={S.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
